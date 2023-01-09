export const listToCircularList = <T>(list: T[]) => {
  if (!list.length) throw new Error("List is empty");

  const circularList = {
    list,
    currentIndex: 0,
    it: (index: number) => {
      if (index >= circularList.list.length || index < 0) {
        throw new Error("Invalid index");
      }
      return list[index];
    },
    next: () => {
      circularList.currentIndex++;

      if (circularList.currentIndex >= list.length)
        circularList.currentIndex = 0;

      return {
        item: list[circularList.currentIndex],
        index: circularList.currentIndex,
      };
    },

    prev: () => {
      circularList.currentIndex--;

      if (circularList.currentIndex < 0)
        circularList.currentIndex = list.length - 1;

      return {
        item: list[circularList.currentIndex],
        index: circularList.currentIndex,
      };
    },
  };

  return circularList;
};
