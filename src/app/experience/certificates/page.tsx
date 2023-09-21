import React from "react";
import Image from "next/image";
import { ImageProps } from 'next/image';


const CERTIFICATES= [
  { name: 'Bootstrap', description: "Front-End Web UI Framework: Bootstrap" },
  { name: 'Data_StructuresandAlgos', description: "Python Fundamentals Data Structures and Algorithms" },
  { name: 'React_Native', description: "Multiplatform Mobile App Development with React Native" },
  { name: 'Front_End_WebandMobile', description: "Front End Web and Mobile Development Bootcamp"},
  { name: 'Full_Stack_WebandMobile', description: "Server-side Development with NodeJS Express and MongoDB"},
  { name: 'HTML_CSS_JS', description: "Front End Web UI Framework: Bootstrap"},
  { name: 'React', description: "Front End JavaScript Library: React"},
  { name: 'Sql_Devops_Python', description: "Backend Python, SQL, and Devops Bootcamp"},
  {name: 'ModernSWE', description: "Modern Software Engineering with DevOps"},
  {name: 'Sql_Data_MOdeling', description: "SQL and Python"},
];


export default function Certs() {
  return (
    <div className="dark:bg-slate-800 bg-white">
      <div className="bg-indigo-50 rounded text-center py-5 w-10/12 mx-auto dark:bg-slate-600 dark:rounded dark:border-none">
        <div className="flex flex-wrap justify-center">
          {CERTIFICATES.map(certificate => (
            <CertificateItem
              key={certificate.name}
              image={`/images/certificates/${certificate.name}.png`}
              alt="Web Dev"
              description={certificate.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface CertificateItemProps {
  image: ImageProps['src'];
  alt: string;
  description: string;
}

const CertificateItem: React.FC<CertificateItemProps> = ({ image, alt, description }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4 text-stone-700 dark:text-slate-100">
    <div>
      <Image
        className="transform hover:scale-110 transition-transform"
        src={image}
        alt={alt}
        width={400}
        height={300}
      />
      <p>{description}</p>
    </div>
  </div>
);
