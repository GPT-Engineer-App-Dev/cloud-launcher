import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Welcome to SaaS Product</h1>
        <p className="text-lg text-muted-foreground">The best solution for your business needs.</p>
        <Button size="lg">Get Started</Button>
        <img src="https://placehold.co/600x400" alt="placeholder" className="mx-auto mt-8" />
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Feature 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Feature 1 description goes here.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Feature 2 description goes here.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Feature 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Feature 3 description goes here.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="text-center space-y-4">
                <Avatar>
                  <AvatarImage src="https://placehold.co/100x100" alt="Customer 1" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <p>"This product has changed my life!"</p>
                <p className="font-bold">- Customer 1</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="text-center space-y-4">
                <Avatar>
                  <AvatarImage src="https://placehold.co/100x100" alt="Customer 2" />
                  <AvatarFallback>CD</AvatarFallback>
                </Avatar>
                <p>"Amazing features and great support."</p>
                <p className="font-bold">- Customer 2</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="text-center space-y-4">
                <Avatar>
                  <AvatarImage src="https://placehold.co/100x100" alt="Customer 3" />
                  <AvatarFallback>EF</AvatarFallback>
                </Avatar>
                <p>"Highly recommend this to everyone."</p>
                <p className="font-bold">- Customer 3</p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Pricing Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$10/month</p>
              <p>Includes basic features.</p>
              <Button className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Standard Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$20/month</p>
              <p>Includes standard features.</p>
              <Button className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Premium Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>$30/month</p>
              <p>Includes all features.</p>
              <Button className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="space-y-4 text-center">
        <Separator />
        <div className="flex justify-center space-x-4">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;