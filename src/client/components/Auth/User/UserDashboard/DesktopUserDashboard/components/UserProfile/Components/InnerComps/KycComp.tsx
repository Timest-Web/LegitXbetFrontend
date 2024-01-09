import React, { useState } from "react";
import ProfileVeriReuse from "../ProfileReusables/ProfileVeriReuse";
import Image from "next/image";
import pdfImg from "../../../../../assets/pdfImg.png";
import ProfileReusableCard from "../ProfileReusables/ProfileReusableCard";

const KycComp = () => {
  const [selectedDocumentType, setSelectedDocumentType] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDocumentTypeChange = (documentType: string) => {
    setSelectedDocumentType(documentType);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    console.log("File uploaded:", file);
  };

  return (
    <div className="pb-20 md:pb-0">
      <ProfileVeriReuse isInsideKycComp />
      <ProfileReusableCard
        profileContent={
          <div>
            <div className="font-bold flex justify-between mb-8">
              <h2>Upload your KYC for verification</h2>
              <h2>Verified documents will appear here</h2>
            </div>
            <h2 className="font-bold mb-4">Document type</h2>
            <form className="flex flex-col space-y-9">
              <div className=" hidden md:flex space-x-10 font-bold">
                {renderRadioButton(
                  "intPassport",
                  "Int. Passport",
                  "documentType"
                )}
                {renderRadioButton("nin", "NIN", "documentType")}
                {renderRadioButton("votersCard", "Voters Card", "documentType")}
                {renderRadioButton(
                  "driversLicense",
                  "Drivers License",
                  "documentType"
                )}
              </div>
              {renderUploadSection()}
              <button className="bg-[#101010] text-white w-[10.75rem] h-[2.375rem] p-1 rounded-[5px] ml-12">
                Send for verification
              </button>
            </form>
            <p className="mt-12">
              NB - Only government-issued documents will be approved
            </p>
          </div>
        }
      />
    </div>
  );

  function renderRadioButton<T>(id: T, label: string, name: string) {
    return (
      <div key={String(id)} className="flex space-x-1">
        <input
          id={String(id)}
          className="w-[1.375rem] h-[1.375rem]"
          type="radio"
          name={name}
          checked={selectedDocumentType === String(id)}
          onChange={() => handleDocumentTypeChange(String(id))}
        />
        <label htmlFor={String(id)}>{label}</label>
      </div>
    );
  }

  function renderUploadSection() {
    return (
      <div className="bg-[#ECEEF1] border-[#101010] border-2 border-dashed w-[18.0625rem] h-[8.6875rem] rounded-[20px] flex flex-col justify-center items-center text-center">
        <label
          htmlFor="fileUpload"
          className="cursor-pointer flex flex-col justify-center items-center text-center"
        >
          <Image src={pdfImg} alt="Upload icon" />
          <h2>Upload PDF only</h2>
        </label>
        <input
          id="fileUpload"
          type="file"
          accept=".pdf"
          onChange={handleFileUpload}
          style={{ display: "none" }}
        />
        {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      </div>
    );
  }
};

export default KycComp;
