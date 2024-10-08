// ImageCard.jsx
import React from "react";
import { Button } from "@/components/ui/button";

const ImageCard = ({ imgUrl, title, donationLink }) => {
  return (
    <div className="border mx-auto bg-primary text-secondary rounded-lg shadow-lg overflow-hidden">
      <a href={donationLink} target="_blank" rel="noopener noreferrer">
        <img
          src={imgUrl}
          alt={title}
          className="w-auto mx-auto pt-4 h-48 object-fit"
        />
        <div className="p-6">
          <h3 className="text-lg font-semibold truncate">{title}</h3>
          <Button variant="outline" className="mt-6">
            {donationLink ? "Donate Now" : "Learn More"}
          </Button>
          <div className="pt-2  text-secondary"></div>
        </div>
      </a>
    </div>
  );
};

export default ImageCard;

