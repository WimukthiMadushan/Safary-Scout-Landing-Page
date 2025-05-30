import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const documents = [
  { name: 'Topic Assessment Form', link: '/documents/topic-assessment-form.pdf' },
  { name: 'Individual Reports', link: '/documents/individual-reports.zip' },
  { name: 'Design Documents', link: '/documents/design-documents.zip' },
  { name: 'Performance Testing Reports', link: '/documents/performance-testing-reports.zip' },
  { name: 'Research Paper', link: '/documents/research-paper.pdf' },
  { name: 'Final Report - Individual', link: '/documents/final-report-individual.zip' },
  { name: 'Final Report - Group', link: '/documents/final-report-group.pdf' },
];

const CustomDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && event.target instanceof Node && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <Button
        onClick={() => setOpen(!open)}
        size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg cursor-pointer"
      >
        Download Documents <ArrowRight className="ml-2 h-5 w-5" />
      </Button>

      {open && (
          <div
            className="absolute bottom-full mb-2 w-72 max-h-96 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-100"
            >
    {documents.map((doc, index) => (
      <a
        key={index}
        href={doc.link}
        download
        className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-800 z-50"
      >
        {doc.name}
      </a>
    ))}
  </div>
)}

    </div>
  );
};

export default CustomDropdown;
