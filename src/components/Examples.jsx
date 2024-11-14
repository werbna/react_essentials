import { useState } from "react";

import Section from "./Section";
import TabButton from "./TabButton/TabButton";
import Tabs from "./Tabs";
import { EXAMPLES } from "../data";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    //!selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic)
  }

  let tabContent = <p>Please Select a Topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
      buttonsContainer='menu'
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
              label="Components"
            />
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
              label="JSX"
            />
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
              label="Props"
            />
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
              label="State"
            />
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
