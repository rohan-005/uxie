import React, { useRef } from 'react';

interface ProfileUploaderProps {
  customAvatar: string | null;
  onAvatarChange: (base64Url: string | null) => void;
}

export const ProfileUploader: React.FC<ProfileUploaderProps> = ({
  customAvatar,
  onAvatarChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('Please upload an image smaller than 5MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      onAvatarChange(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAvatarChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block font-code text-label-code-sm uppercase text-on-surface-variant tracking-wider">
          Custom Profile Picture (Optional)
        </label>
        {customAvatar && (
          <button
            type="button"
            onClick={handleRemove}
            className="font-code text-[11px] text-error hover:text-error-container uppercase tracking-wider flex items-center gap-1 transition-colors"
          >
            <span className="material-symbols-outlined text-[14px]">delete</span>
            Remove Image
          </button>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {customAvatar ? (
        <div className="flex items-center gap-4 p-3 rounded-lg bg-surface-container-lowest border border-primary-container/40">
          <img
            src={customAvatar}
            alt="Uploaded Profile"
            className="w-14 h-14 rounded-lg object-cover border border-primary-container/60 shadow-md"
          />
          <div className="flex-1">
            <span className="font-code text-label-code-sm text-primary font-semibold block">
              Custom Avatar Loaded
            </span>
            <span className="font-code text-[11px] text-on-surface-variant block">
              This image will be positioned on your collectible card.
            </span>
          </div>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/50 text-tertiary font-code text-label-code-sm uppercase hover:border-primary hover:text-on-surface transition-colors"
          >
            Replace
          </button>
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="group flex flex-col items-center justify-center p-4 rounded-lg bg-surface-container-lowest border border-dashed border-outline-variant/60 hover:border-primary-container/80 hover:bg-surface-container-low/50 cursor-pointer transition-all text-center"
        >
          <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:text-primary mb-2 transition-colors">
            <span className="material-symbols-outlined text-[20px]">add_a_photo</span>
          </div>
          <span className="font-code text-label-code-sm text-tertiary-fixed font-semibold">
            Upload Avatar Image
          </span>
          <span className="font-code text-[11px] text-on-surface-variant mt-0.5">
            PNG, JPG, WebP up to 5MB (Replaces platform default picture)
          </span>
        </div>
      )}
    </div>
  );
};
