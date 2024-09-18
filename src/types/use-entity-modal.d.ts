import { MantineSize } from '@mantine/core';

export type ModalStateType = 'POST' | 'PATCH' | 'DELETE' | null;

export type ModalSizeType = MantineSize | (string & {}) | number;

export type UseEntityModalType<T> = {
  entity: T | null;
  state: ModalStateType;
  size: ModalSizeType;
  setEntityState: (
    entity: T | null,
    state: ModalStateType,
    size?: ModalSizeType
  ) => void;
  close: () => void;
};