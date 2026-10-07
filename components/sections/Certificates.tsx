import { certificates } from "@/data/certificates";
import SectionHeader from "@/components/ui/SectionHeader";
import CertificateGallery from "@/components/ui/CertificateGallery";
import { Reveal } from "@/components/motion/Reveal";
import { monthYearToNumber } from "@/lib/utils";

export default function Certificates() {
  // Newest first
  const sorted = [...certificates].sort((a, b) => monthYearToNumber(b.date) - monthYearToNumber(a.date));

  return (
    <section id="certificates" aria-labelledby="certificates-title" className="section">
      <div className="container-page">
        <SectionHeader
          id="certificates"
          label="Certifications"
          title="Continuous"
          emphasis="learning."
          intro="Courses and credentials earned along the way. Select one to preview, verify or download it."
        />
        <Reveal>
          <CertificateGallery certificates={sorted} />
        </Reveal>
      </div>
    </section>
  );
}
