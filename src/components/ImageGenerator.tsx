import React, { useState } from 'react';
import { Upload, Wand2 } from 'lucide-react';

export function ImageGenerator() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [generating, setGenerating] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleGenerate = async () => {
    setGenerating(true);
    // Simulating AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    setGenerating(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-md rounded-xl shadow-2xl">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Create Your Magical Christmas Photo</h2>
      
      <div className="space-y-6">
        <div className="relative group">
          <div className={`aspect-video rounded-lg overflow-hidden border-2 border-dashed ${preview ? 'border-green-400' : 'border-white/30'} p-4 transition-all`}>
            {preview ? (
              <img src={preview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-white space-y-4">
                <Upload size={48} className="opacity-50" />
                <p className="text-lg">Drop your photo here or click to upload</p>
                <p className="text-sm opacity-70">Supported formats: JPG, PNG</p>
              </div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>

        {preview && (
          <button
            className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-medium transition-all hover:from-green-600 hover:to-green-700 ${generating ? 'opacity-75 cursor-wait' : ''}`}
            onClick={handleGenerate}
            disabled={generating}
          >
            <Wand2 size={20} />
            {generating ? 'Creating Magic...' : 'Generate Christmas Magic'}
          </button>
        )}
      </div>
    </div>
  );
}