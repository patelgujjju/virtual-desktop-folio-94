
import React from 'react';
import { Trash2, FileText, Image, Video, Folder, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RecycleBinAppProps {
  theme: 'light' | 'dark' | 'retro';
}

const RecycleBinApp = ({ theme }: RecycleBinAppProps) => {
  const deletedItems = [
    { name: 'Old Resume v1.pdf', type: 'file', icon: FileText, size: '245 KB', deleted: '2 days ago' },
    { name: 'Draft Project Screenshots', type: 'folder', icon: Folder, size: '15 items', deleted: '1 week ago' },
    { name: 'Test Video.mp4', type: 'file', icon: Video, size: '12.3 MB', deleted: '3 days ago' },
    { name: 'Backup_old_code', type: 'folder', icon: Folder, size: '8 items', deleted: '5 days ago' }
  ];

  const getContainerStyle = () => {
    switch (theme) {
      case 'light':
        return 'bg-white text-gray-800';
      case 'retro':
        return 'bg-gray-200 text-black';
      default:
        return 'bg-white text-gray-800';
    }
  };

  const getItemStyle = () => {
    switch (theme) {
      case 'light':
        return 'hover:bg-gray-100 border-gray-200';
      case 'retro':
        return 'hover:bg-gray-300 border-gray-400';
      default:
        return 'hover:bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className={`h-full ${getContainerStyle()}`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Trash2 className="w-6 h-6 text-red-500" />
            <h1 className="text-2xl font-bold">Recycle Bin</h1>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
            <Button variant="destructive" size="sm">
              Empty Recycle Bin
            </Button>
          </div>
        </div>

        {deletedItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-gray-500">
            <Trash2 className="w-16 h-16 mb-4 opacity-50" />
            <p className="text-lg font-medium">Recycle Bin is empty</p>
            <p className="text-sm">When you delete files, they'll appear here</p>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-500 border-b pb-2">
              <span>Name</span>
              <span>Original Location</span>
              <span>Date Deleted</span>
              <span>Size</span>
            </div>
            
            {deletedItems.map((item, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-4 gap-4 items-center p-3 border rounded-lg cursor-pointer transition-all ${getItemStyle()}`}
              >
                <div className="flex items-center space-x-2">
                  <item.icon className="w-4 h-4 text-gray-500" />
                  <span className="font-medium">{item.name}</span>
                </div>
                <span className="text-sm text-gray-600">Desktop</span>
                <span className="text-sm text-gray-600">{item.deleted}</span>
                <span className="text-sm text-gray-600">{item.size}</span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-start space-x-2">
            <div className="w-4 h-4 bg-yellow-400 rounded-full mt-0.5"></div>
            <div>
              <p className="font-medium text-yellow-800">About Recycle Bin</p>
              <p className="text-sm text-yellow-700 mt-1">
                This is a simulated recycle bin for the portfolio demo. In a real system, deleted files would be stored here temporarily before permanent deletion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecycleBinApp;
