import React from "react";
import Image from "next/image";

type ImageUploadProps = {
  selectedFile?: string | undefined;
  onSelectImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setSelectedTab: (value: string) => void;
  setSelectedFile: (value: string) => void;
};

const ImageUpload: React.FC<ImageUploadProps> = ({
  selectedFile,
  onSelectImage,
  setSelectedTab,
  setSelectedFile,
}) => {
  const selectedFileRef = React.useRef<HTMLInputElement>(null);
  return (
    <div className="flex justify-center items-center w-full">
      {selectedFile ? (
        <div className="flex flex-col">
          <div className="relative min-h-[150px] min-w-[150px] md:min-w-[400px] md:min-h-[400px]">
            <Image className=" object-contain" fill src={selectedFile} alt="" />
          </div>
          <div className="flex gap-2 justify-center mt-4">
                <button className="btn-solid text-xs py-1 md:text-base md:py-1 md:px-4" onClick={()=>setSelectedTab("Post")}>Bact to post</button>
                <button className="btn-outline text-xs py-1 md:text-base md:py-1 md:px-4" onClick={()=>setSelectedFile('')}>remove</button>

          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center p-20 w-full border-[1px] border-dashed border-primary/40">
          <button
            className="btn-outline text-xs py-1 md:text-base md:py-1 md:px-4"
            onClick={() => {
              selectedFileRef.current?.click();
            }}
          >
            Upload Image
          </button>
          <input
            ref={selectedFileRef}
            type="file"
            hidden
            onChange={onSelectImage}
          />
        </div>
      )}
    </div>
  );
};
export default ImageUpload;
