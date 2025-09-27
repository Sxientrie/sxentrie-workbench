from playwright.sync_api import Page, expect, sync_playwright

def verify_styling(page: Page):
    """
    This test verifies that the portfolio application renders with the correct
    styles from the UI package for both light and dark themes.
    """
    # 1. Arrange: Go to the portfolio application.
    # Increased timeout to give the dev server time to start up.
    page.goto("http://localhost:5173", timeout=60000)

    # 2. Assert: Check for key styled elements in light mode.
    # The header should be visible.
    header = page.get_by_role("banner")
    expect(header).to_be_visible()

    # The main content should be visible.
    expect(page.get_by_role("main")).to_be_visible()

    # Wait for the page to be stable before taking a screenshot.
    page.wait_for_load_state("networkidle")

    # 3. Screenshot: Capture the light mode view.
    page.screenshot(path="jules-scratch/verification/verification-light.png")

    # 4. Act: Switch to dark mode.
    theme_toggle_button = page.get_by_role("button", name="Toggle theme")
    expect(theme_toggle_button).to_be_visible()
    theme_toggle_button.click()

    # 5. Assert: Check that dark mode has been applied.
    # The `html` element should have the 'dark' class.
    expect(page.locator("html")).to_have_class("dark")

    # Wait for theme transition to complete
    page.wait_for_timeout(500)

    # 6. Screenshot: Capture the dark mode view.
    page.screenshot(path="jules-scratch/verification/verification-dark.png")

# This is the main part of the script that runs the verification.
with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()
    try:
        verify_styling(page)
        print("Verification script completed successfully.")
    except Exception as e:
        print(f"An error occurred during verification: {e}")
    finally:
        browser.close()