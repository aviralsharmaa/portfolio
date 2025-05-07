'use client';

import React, { useEffect, useRef } from 'react';
import { getCalApi } from "@calcom/embed-react";

const headerItems = [
  { title: "Lets Talk", href: "/", key: 't' },
  { title: "projects", href: "/", key: 'p' },
  { title: "resume", href: "https://drive.google.com/file/d/1DiVQEWG90OCFJOMtVcpAVj2Bv2yVLWWm/view?usp=drive_link", key: 'r' },
  { title: "github", href: "https://github.com/aviralsharmaa", key: 'g' },
];

const Header = () => {
  const calBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "let-s-talk" });
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      const key = e.key.toLowerCase();
      if (key === 'p') window.location.href = '/';
      if (key === 'r') window.open('https://drive.google.com/file/d/1DiVQEWG90OCFJOMtVcpAVj2Bv2yVLWWm/view?usp=drive_link', '_blank');
      if (key === 'g') window.open('https://github.com/aviralsharmaa', '_blank');
      if (key === 't') calBtnRef.current?.click(); // simulate click
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className='flex gap-5'>
      {headerItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="text-base font-medium text-white"
          target={item.title === "resume" ? "_blank" : "_self"}
        >
          {item.title} [{item.key}]
        </a>
      ))}

      {/* Hidden trigger button for Cal.com */}
      <button
        ref={calBtnRef}
        data-cal-namespace="let-s-talk"
        data-cal-link="keshav-0907/let-s-talk"
        data-cal-config='{"layout":"month_view","theme":"dark"}'
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default Header;
