'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="px-8 py-6 mt-4 text-left shadow-lg rounded-lg">
        <h3 className="text-2xl font-bold text-center border-b py-2">
          Register to your account
        </h3>
        <form action="#">
          <div className="mt-8">
            <div>
              <Label htmlFor="email" className="block">
                Email
              </Label>
              <Input
                type="text"
                placeholder="Email"
                id="email"
                name="email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <Label htmlFor="name" className="block">
                Name
              </Label>
              <Input
                type="name"
                placeholder="Name"
                id="name"
                name="name"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="mt-4">
              <Label htmlFor="password" className="block">
                Password
              </Label>
              <Input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <div className="flex items-baseline justify-between">
              <Button
                type="submit"
                className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-2xl hover:bg-blue-900 w-full"
              >
                Register
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
