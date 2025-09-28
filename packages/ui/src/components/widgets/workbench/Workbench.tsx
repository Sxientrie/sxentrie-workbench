import React, { useState } from 'react';
import { Button } from '../../base/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../base/card';
import { InputGroup } from '../../composite/input-group';
import { ComponentShowcase } from '../component-showcase';

export const Workbench: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAsyncClick = () => {
    setIsLoading(true);
    console.log('Simulating API call...');
    setTimeout(() => {
      setIsLoading(false);
      console.log('API call successful!');
    }, 2000);
  };
  
  return (
    <div className="space-y-12">
      <ComponentShowcase
        title="Buttons"
        description="Primary interactive elements are embossed to appear raised, inviting action. The light source is from the bottom, creating a top shadow and bottom highlight."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
         <div className="flex flex-wrap items-center gap-4 mt-4">
          <Button variant="primary" loading={isLoading} onClick={handleAsyncClick}>
            {isLoading ? 'Submitting...' : 'Submit with State'}
          </Button>
        </div>
      </ComponentShowcase>

      <ComponentShowcase
        title="Inputs"
        description="Input fields are debossed (inset) to signify a container to be filled. This provides a clear physical metaphor for data entry."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          <InputGroup label="Your Name" id="name" placeholder="John Doe" />
          <InputGroup label="Your Email" id="email" type="email" placeholder="you@example.com" />
          <div className="md:col-span-2">
            <InputGroup label="Password" id="password" type="password" />
          </div>
           <div className="md:col-span-2">
            <InputGroup label="Disabled Input" id="disabled-input" placeholder="Cannot edit" disabled />
          </div>
        </div>
      </ComponentShowcase>

      <ComponentShowcase
        title="Cards"
        description="Primary containers use a generous 16px (rounded-xl) corner radius and a subtle border, creating a soft, tangible 'squircle' shape."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Alpha</CardTitle>
              <CardDescription>A component to showcase composition.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This card demonstrates how different components like titles, descriptions, and content areas can be composed within a shared container.
              </p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle>Interactive Elements</CardTitle>
              <CardDescription>Mixing tangible components.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <InputGroup label="API Key" id="api-key" type="password" />
                <Button variant="primary" className="w-full">Save Changes</Button>
            </CardContent>
          </Card>
           <Card className="lg:col-start-3 lg:row-start-1">
            <CardHeader>
              <CardTitle>Just a Title</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Cards are flexible containers for any type of content.
              </p>
            </CardContent>
          </Card>
        </div>
      </ComponentShowcase>
    </div>
  );
};
