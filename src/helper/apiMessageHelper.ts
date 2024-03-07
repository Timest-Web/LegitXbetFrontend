import { ErrorToast, SuccessToast } from "../client/shared/ToastBar";
interface IApiMsgHelperTYpe {
  statusCode: number;
  onSuccessCallback?: () => void;
  onFailureCallback?: () => void;
  message?: string;
}

const apiMessageHelper = ({
  statusCode,
  onSuccessCallback,
  onFailureCallback,
  message,
}: IApiMsgHelperTYpe) => {
  if (statusCode >= 400 || statusCode <= 409 || statusCode === 500
  ) {
    ErrorToast({text: message});
    onFailureCallback && onFailureCallback();
  }

  if (statusCode === 200 || statusCode === 201) {
    onSuccessCallback && onSuccessCallback();
    SuccessToast({text: message});
  }
};

export default apiMessageHelper;
