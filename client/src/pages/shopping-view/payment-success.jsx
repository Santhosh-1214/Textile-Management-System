import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import React from "react";

function PaymentSuccessPage() {
  const navigate = useNavigate();

  // Trigger confetti effect on component mount
  React.useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white p-4">
      <Card className="w-full max-w-md p-8 text-center shadow-lg border-0">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle2 className="h-16 w-16 text-green-600" strokeWidth={1.5} />
          </div>
        </div>
        
        <CardHeader className="p-0">
          <CardTitle className="text-3xl font-bold text-green-600 mb-2">
            Payment Successful!
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Thank you for your purchase
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-0 mt-6 space-y-6">
          <div className="space-y-2">
            <p className="text-gray-700">
              Your order has been confirmed and will be processed shortly.
            </p>
            <p className="text-sm text-gray-500">
              A receipt has been sent to your email.
            </p>
          </div>
          
          <div className="flex flex-col space-y-3">
            <Button 
              onClick={() => navigate("/shop/account")}
              className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg"
            >
              View Orders
            </Button>
            <Button 
              onClick={() => navigate("/shop")}
              variant="outline"
              className="w-full h-12 text-lg"
            >
              Continue Shopping
            </Button>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need help? <a href="#" className="text-green-600 hover:underline">Contact support</a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default PaymentSuccessPage;