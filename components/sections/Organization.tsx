import { organizations } from "@/data/organizations";
import SectionHeader from "@/components/ui/SectionHeader";
import OrganizationItem from "@/components/ui/OrganizationItem";
import { Reveal } from "@/components/motion/Reveal";

export default function Organization() {
  return (
    <section id="organization" aria-labelledby="organization-title" className="section">
      <div className="container-page">
        <SectionHeader
          id="organization"
          label="Organizations"
          title="Leadership &"
          emphasis="community."
        />

        <ol className="border-t border-line">
          {organizations.map((org, index) => (
            <Reveal as="li" key={org.id} delay={index * 0.06} className="border-b border-line">
              <OrganizationItem org={org} />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
