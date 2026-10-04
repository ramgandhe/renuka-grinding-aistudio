/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientMarquee } from './components/ClientMarquee';
import { Advantage } from './components/Advantage';
import { ProductCatalog } from './components/ProductCatalog';
import { Testimonials } from './components/Testimonials';
import { AboutLegacy } from './components/AboutLegacy';
import { RetrofittingServices } from './components/RetrofittingServices';
import { MediaResources } from './components/MediaResources';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { MachineConfiguratorModal } from './components/MachineConfiguratorModal';
import { DownloadBrochureModal } from './components/DownloadBrochureModal';
import { CookieBanner } from './components/CookieBanner';
import { VideoResource } from './types';

export default function App() {
  const [activeVideo, setActiveVideo] = useState<VideoResource | null>(null);
  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState(false);
  const [configuratorMachineId, setConfiguratorMachineId] = useState<string>('awh-cnc');
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [brochureDocType, setBrochureDocType] = useState<'brochure' | 'profile'>('brochure');

  const handleOpenConfigurator = (machineId?: string) => {
    if (machineId) setConfiguratorMachineId(machineId);
    setIsConfiguratorOpen(true);
  };

  const handleOpenBrochure = (doc: 'brochure' | 'profile' = 'brochure') => {
    setBrochureDocType(doc);
    setIsBrochureOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-rose-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenConfigurator={handleOpenConfigurator}
        onOpenBrochure={() => handleOpenBrochure('brochure')}
      />

      <main className="flex-grow">
        {/* Section 1: Hero Banner */}
        <Hero
          onOpenVideo={setActiveVideo}
          onOpenConfigurator={() => handleOpenConfigurator('awh-cnc')}
          onOpenBrochure={() => handleOpenBrochure('brochure')}
        />

        {/* Section 4 Preview: Trusted by Industry Leaders Marquee */}
        <ClientMarquee />

        {/* Section 2: The Renuka Advantage & Technical Schematics */}
        <Advantage onOpenConfigurator={() => handleOpenConfigurator('awh-cnc')} />

        {/* Section 3 & 4: Core Product Portfolio & Detailed Technical Catalog */}
        <ProductCatalog
          onOpenConfigurator={handleOpenConfigurator}
          onOpenVideo={setActiveVideo}
          onOpenBrochure={() => handleOpenBrochure('brochure')}
        />

        {/* Section 5: Voice of the Customer (Video Testimonials) */}
        <Testimonials onOpenVideo={setActiveVideo} />

        {/* Section 3 (Blueprint): About Us (The Legacy Page & Masters of Precision) */}
        <AboutLegacy />

        {/* Section 5 (Blueprint): Services, Retrofitting & Spares */}
        <RetrofittingServices onOpenConfigurator={() => handleOpenConfigurator('awh-cnc')} />

        {/* Section 6: Media & Resources (Video Library & Download Center) */}
        <MediaResources
          onOpenVideo={setActiveVideo}
          onOpenBrochure={handleOpenBrochure}
        />

        {/* Section 7: Contact Us & Factory Location */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer
        onOpenBrochure={() => handleOpenBrochure('brochure')}
        onOpenConfigurator={() => handleOpenConfigurator('awh-cnc')}
      />

      {/* Modals & Overlays */}
      <VideoModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />

      <MachineConfiguratorModal
        isOpen={isConfiguratorOpen}
        onClose={() => setIsConfiguratorOpen(false)}
        initialMachineId={configuratorMachineId}
      />

      <DownloadBrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        defaultDoc={brochureDocType}
      />

      <CookieBanner />
    </div>
  );
}
