import { Input } from "../../../../../shared/components";

export const ConfirmEmailForm = () => {
  return (
    <form>
      <p>На почту отправлен код подтверждения</p>
      <Input label="Код" />
    </form>
  );
};
