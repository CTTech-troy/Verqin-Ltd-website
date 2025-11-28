import React, { useState, useRef } from 'react';
import { UploadIcon, FileIcon, XIcon } from 'lucide-react';

export function FileUpload({
  label,
  accept = '.pdf,.png,.jpg,.jpeg',
  required = false,
  error,
  helperText,
  onChange
}) {
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    onChange?.(selectedFile);
  };
  const handleRemove = () => {
    setFile(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    onChange?.(null);
  };
  return <div className="w-full">
      <label className="block mb-2 text-sm font-medium text-gray-text">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {!file ? <div onClick={() => inputRef.current?.click()} className={`
            border-2 border-dashed rounded-xl p-6 text-center cursor-pointer
            transition-all duration-200 hover:border-primary hover:bg-gray-bg
            ${error ? 'border-red-500' : 'border-gray-panel'}
          `}>
          <UploadIcon className="w-8 h-8 mx-auto mb-2 text-gray-muted" />
          <p className="text-sm text-gray-muted">
            Click to upload or drag and drop
          </p>
          <p className="text-xs text-gray-muted mt-1">
            {accept.split(',').join(', ')} (max 10MB)
          </p>
        </div> : <div className="flex items-center gap-3 p-4 bg-gray-bg border-2 border-gray-panel rounded-xl">
          <FileIcon className="w-5 h-5 text-primary" />
          <span className="flex-1 text-sm text-gray-text truncate">
            {file.name}
          </span>
          <button type="button" onClick={handleRemove} className="p-1 hover:bg-white rounded-lg transition-colors">
            <XIcon className="w-4 h-4 text-gray-muted" />
          </button>
        </div>}

      <input ref={inputRef} type="file" accept={accept} onChange={handleFileChange} className="hidden" required={required} />

      {error && <p className="mt-1 text-sm text-red-500 animate-fade-in">{error}</p>}
      {helperText && !error && <p className="mt-1 text-sm text-gray-muted">{helperText}</p>}
    </div>;
}