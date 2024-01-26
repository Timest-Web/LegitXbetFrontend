export const useFormattedPhoneNo = ({phoneNo}:{phoneNo:string}) => {
		const formattedPhoneNo = phoneNo.startsWith('0')
			? `+234${phoneNo.slice(1)}`
                  : `+234${phoneNo}`;
      return { formattedPhoneNo };
}
