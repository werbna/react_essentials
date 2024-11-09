import CoreConcept from "../CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../../data";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts!</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem, idx) => (
          <CoreConcept key={idx} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}
