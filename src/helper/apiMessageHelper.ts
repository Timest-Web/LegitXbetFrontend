import { toast } from "react-toastify";
interface IApiMsgHelperTYpe {
  statusCode: number;
  onSuccessCallback?: () => void;
  onFailureCallback?: () => void;
  message: string | string[];
}
const apiMessageHelper = ({
  statusCode,
  onSuccessCallback,
  onFailureCallback,
  message,
}: IApiMsgHelperTYpe) => {
  if (
    statusCode === 400 ||
    statusCode === 401 ||
    statusCode === 409 ||
    statusCode === 500
  ) {
    if (Array.isArray(message)) {
      for (let i = 0; i < message.length; i++) {
        toast.error(message[i]);
      }
    } else {
      toast.error(message);
    }
    onFailureCallback && onFailureCallback();
  }

  if (statusCode === 200 || statusCode === 201) {
    onSuccessCallback && onSuccessCallback();
    toast.success(message ?? "");
  }
};

export default apiMessageHelper;
