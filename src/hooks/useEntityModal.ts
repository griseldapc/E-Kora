
  import { create } from 'zustand';
import { ModalSizeType, ModalStateType, UseEntityModalType } from '~/types/use-entity-modal';
  
  export const createEntityModalStore = <T>() =>
    create<UseEntityModalType<T>>((set) => ({
      entity: null,
      state: null,
      size: 'md',
      setEntityState: (
        entity: T | null,
        state: ModalStateType,
        size?: ModalSizeType
      ) =>
        set(() => {
          return { state, entity, size };
        }),
      close: () => set(() => ({ state: null, entity: null })),
    }));
  
  export const useEntityModal = createEntityModalStore();