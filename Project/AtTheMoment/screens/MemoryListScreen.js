import List from "../components/List/List";
import { MEMORIES } from "../data/memoryData";
import { keyCollection } from "../data/memoryData";

export default function MemoryListScreen() {
  // Screen set up
  keyCollection();
  const displayedMemories = MEMORIES;
  return <List items={displayedMemories} />;
}
