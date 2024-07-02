import { FunctionComponent } from 'react';

export type PropsOf<T> = T extends FunctionComponent<infer P> ? P : never;

export type ModalTerminators = {
  resolveModal: (result: unknown) => void;
  closeModal: () => void;
};

export type ModalType = {
  component: FunctionComponent;
  id?: string | number;
  props?: PropsOf<FunctionComponent>;
} & ModalTerminators;

export type AddModalType = <T extends FunctionComponent>(modal: {
  component: T;
  id?: string | number;
  props?: Omit<PropsOf<T>, 'resolveModal' | 'closeModal'>;
}) => Promise<unknown>;
