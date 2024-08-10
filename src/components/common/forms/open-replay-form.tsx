import { useCallback, type ReactElement } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../atomic/form";
import { useForm } from "react-hook-form";
import { Input } from "../../atomic/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { invoke } from "@tauri-apps/api";

const schema = z.object({
  replay: z
    .array(z.instanceof(File))
    .nonempty({ message: "You must provide at least one file" }),
});

type FormSchema = z.infer<typeof schema>;

export function OpenReplayForm(): ReactElement {
  const form = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: { replay: [] },
  });

  const onSubmit = useCallback((data: FormSchema): void => {
    const replayData = data.replay.at(0);

    if (!replayData) {
      return;
    }

    replayData
      .arrayBuffer()
      .then((arrayBuffer) => Array.from(new Uint8Array(arrayBuffer)))
      .then((buffer) => invoke("array_buffer", { buffer }));
  }, []);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="replay"
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabel htmlFor={fieldProps.name}>Replay file</FormLabel>
              <Input
                {...fieldProps}
                type="file"
                onChange={(event) =>
                  onChange(Array.from(event.target.files ?? []))
                }
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <Input type="submit" value="Submit" />
      </form>
    </Form>
  );
}
