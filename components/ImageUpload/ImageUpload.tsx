import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';
import axios from 'axios';
import { uploadCatImage } from '@/services/catsApiService';
import { CatsItem } from '@/modules/Cats/store/cats/types';
import toast from 'react-hot-toast';
import Spinner from '@/components/Spinner';

export interface IImageUploadProps {
  text: string;
  handleUploadImage: (formData: FormData) => Record<string, any>;
  handleSuccess: (data: any) => void;
  handleError: (error: any) => void;
}

const ImageUpload: React.FC<IImageUploadProps> = ({
  text,
  handleUploadImage,
  handleSuccess,
  handleError,
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file) {
      toast.error('Please select a file first!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true);
      const response = await handleUploadImage(formData);
      handleSuccess(response.data);
    } catch (error) {
      handleError(error);
    } finally {
      setFile(null);
      setLoading(false);
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-row items-center w-full max-w-sm"
      >
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/gif, image/jpeg, image/png"
          className="block w-full text-sm text-gray-700
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0
                     file:text-sm file:font-semibold
                     file:bg-blue-50 file:text-blue-700
                     hover:file:bg-blue-100"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-52 relative px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          {text}
          {loading && (
            <span className="absolute right-0">
              <Spinner />
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default ImageUpload;
