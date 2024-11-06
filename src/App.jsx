import CoreConcept from "./components/CoreConcept/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton/TabButton";
import { CORE_CONCEPTS } from "./data";

function App() {
  let tabContent = 'components';

  function handleSelect(selectedButton) {
    tabContent = selectedButton;
  }

  console.log('App Component Executing');

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts!</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')} label='Components'/>
            <TabButton onSelect={() => handleSelect('jsx')} label='JSX'/>
            <TabButton onSelect={() => handleSelect('props')} label='Props'/>
            <TabButton onSelect={() => handleSelect('state')} label='State'/>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
