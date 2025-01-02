import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import { cn } from '~/utils/cn';
import { BaseOption, BaseRecord, UseSelectReturnType } from '@refinedev/core';
import { ComponentPropsWithoutRef, forwardRef, useState, type ElementRef } from 'react';
import { TAny } from '~/types/any';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '~/components-shadcn/command';
import { Popover, PopoverContent } from '~/components-shadcn/popover';
import { PopoverTrigger } from '@radix-ui/react-popover';
import { Button } from '~/components-shadcn/button';
import { ScrollArea } from '~/components-shadcn/scroll-area';
import { FormControl } from '~/components-shadcn/form';

type ComboboxProps = ComponentPropsWithoutRef<typeof Command> &
  Pick<UseSelectReturnType<BaseOption, TAny>, 'options'> & {
    placeholder?: string;
    emptyMessage?: string;
    onChange?: (value: string | number) => void;
    value?: string | number | BaseRecord;
    disabled?: boolean;
  };

export const Combobox = forwardRef<ElementRef<typeof Command>, ComboboxProps>(({ ...props }, ref) => {
  const [open, setOpen] = useState(false);

  const value = () => {
    if (typeof props.value === 'object' && 'id' in props.value) {
      return (props.value as BaseRecord).id;
    }

    return props.value;
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            disabled={props.disabled}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn('flex w-full justify-between sm:w-[250px]', !value() && 'text-muted-foreground')}
          >
            {value()
              ? props.options?.find((option) => option.value === value())?.label
              : (props.placeholder ?? 'Select')}
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-full max-w-full p-0 sm:w-[250px]">
        <Command className="rounded-lg border shadow-md" ref={ref}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <ScrollArea className="max-h-52 overflow-y-auto">
                {props.options?.map((option) => (
                  <CommandItem
                    value={option.label}
                    key={option.value}
                    onSelect={() => {
                      props.onChange?.(option.value);
                      setOpen(false);
                    }}
                  >
                    {option.label}
                    <CheckIcon
                      className={cn('ml-auto h-4 w-4', option.value === value() ? 'opacity-100' : 'opacity-0')}
                    />
                  </CommandItem>
                ))}
              </ScrollArea>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
});

Combobox.displayName = 'Combobox';