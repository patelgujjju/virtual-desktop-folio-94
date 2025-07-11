
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  onYes: () => void;
  onNo: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, onYes, onNo }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 shadow-xl">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">Welcome!</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                D
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Want to see resume with DhruvOS?</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Experience my interactive desktop-style portfolio interface or continue with the traditional website view.
            </p>
          </div>
          <div className="flex gap-3">
            <Button 
              onClick={onYes}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Yes, Show DhruvOS
            </Button>
            <Button 
              onClick={onNo}
              variant="outline"
              className="flex-1"
            >
              No, Continue Here
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Popup;
