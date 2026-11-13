import List from "../components/List/List";
import { MEMORIES } from "../data/dummy_data";

export default function MemoryListScreen() {
  // Screen set up
  const type = "all";
  const displayedMemories = MEMORIES;
  return <List items={displayedMemories} />;
}
