import { useIntl } from "react-intl";

const useIntlTag = () => {
    const intl = useIntl();
    return (id) => {
        return intl.formatMessage({ id });
    };
};

export default useIntlTag;
