import React from 'react';
import { ThemeProvider, ThemeToggle, Button, Card, CardHeader, CardTitle, CardContent } from '@sxentrie/ui';

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
          <nav className="container mx-auto flex justify-between items-center p-4">
            <h1 className="text-xl font-bold">My Portfolio</h1>
            <ThemeToggle />
          </nav>
        </header>

        <main className="container mx-auto p-4 md:p-8">
          {/* Hero Section */}
          <section className="text-center my-16 md:my-24">
            <h2 className="text-4xl md:text-5xl font-bold">Jane Doe</h2>
            <p className="text-muted-foreground mt-3 text-lg">Software Engineer & Web Developer</p>
            <Button className="mt-6" size="default">
              Get In Touch
            </Button>
          </section>

          {/* Projects Section */}
          <section>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">My Work</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project One</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">A brief and compelling description of the first project.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project Two</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">A brief and compelling description of the second project.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project Three</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">A brief and compelling description of the third project.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center py-16 mt-16 border-t border-border">
            <p className="text-muted-foreground">© 2025 Jane Doe. All Rights Reserved.</p>
          </footer>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
