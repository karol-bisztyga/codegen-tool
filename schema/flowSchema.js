import { TurboModuleRegistry, TurboModule } from "react-native";

type Person = {|
  +name: string,
  +surname: string,
  +gender: boolean,
  +age: number,
|};

export interface Spec extends TurboModule {
  +addPerson: (person: Person) => boolean;
  +getPerson: (name: string, surname: string) => Person;
  +getPeople: () => Array<Person>;
}

export default TurboModuleRegistry.get<Spec>("PeopleTurboModule");
