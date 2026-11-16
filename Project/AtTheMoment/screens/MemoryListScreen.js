import List from "../components/List/List";
import { MEMORIES } from "../data/memoryData";

export default function MemoryListScreen() {
  // Screen set up
  const displayedMemories = MEMORIES;
  return <List items={displayedMemories} />;
}
