import type { BuilderReturn } from '$lib/internal/types';
import type { ChangeFn } from '$lib/internal/helpers';
import type { Writable } from 'svelte/store';
import type { createCombobox } from './create';

export type CreateComboboxProps<T> = {
	/** The list of items to display in the combobox. */
	items: T[];
	/**
	 * Determines behavior when scrolling items into view.
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#block
	 */
	scrollAlignment?: 'nearest' | 'center';
	/**
	 * Predicate function to filter the visible items. When the user types,
	 * the filterFunction will be run on each item along with the current
	 * input value. If the predicate returns true, the item will be displayed.
	 * @param item the current item being filtered.
	 * @param value the current input value.
	 * @returns whether the item should be visible.
	 */
	filterFunction: ComboboxFilterFunction<T>;
	itemToString: ComboboxItemToString<T>;

	/**
	 * Whether or not the combobox should loop through the list when
	 * the end or beginning is reached.
	 *
	 * @default true
	 */
	loop?: boolean;

	/**
	 * Whether or not the combobox should be open by default
	 * when the component is rendered.
	 *
	 * This should only be used when you are not passing a controlled `open` store.
	 *
	 * @default false
	 */
	defaultOpen?: boolean;

	/**
	 * An optional controlled store that manages the open state of the combobox.
	 */
	open?: Writable<boolean>;

	/**
	 * Change function that is called when the combobox's `open` state changes.
	 */
	onOpenChange?: ChangeFn<boolean>;

	/**
	 * Whether or not to close the combobox menu when the user clicks
	 * outside of the combobox.
	 *
	 * @default true
	 */
	closeOnOutsideClick?: boolean;

	/**
	 * Whether or not to close the combobox menu when the user presses
	 * the escape key.
	 *
	 * @default true
	 */
	closeOnEscape?: boolean;

	/**
	 * Whether or not to prevent scrolling the page when the
	 * combobox menu is open.
	 *
	 * @default true
	 */
	preventScroll?: boolean;

	/**
	 * Whether the combobox menu should be rendered in a portal.
	 *
	 * @default true
	 */
	portal?: boolean;
};

export type ComboboxFilterFunction<T> = (item: T, value: string) => boolean;

export type ComboboxItemToString<T> = (item: T) => string;

export type ComboboxItemProps<T> = {
	item: T;
	/** Array index of the item. */
	index: number;
	/** Is the item disabled? */
	disabled?: boolean;
};

export type Combobox = BuilderReturn<typeof createCombobox>;
export type ComboboxElements = Combobox['elements'];
export type ComboboxOptions = Combobox['options'];
export type ComboboxStates = Combobox['states'];
export type ComboboxHelpers = Combobox['helpers'];
