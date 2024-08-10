import type { ReactElement } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../atomic/form";
import { useForm } from "react-hook-form";
import { Input } from "../../atomic/input";

export function OpenReplayForm(): ReactElement {
  const form = useForm({
    defaultValues: {
      replay: [],
    },
  });

  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="replay"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor={field.name}>Replay file</FormLabel>
              <Input type="file" {...field} />
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
      </form>
    </Form>
  );
}
