import { Spinner } from "phosphor-react";
import { SpinnerContainer, SpinningBox } from "./styles";

export function Loader() {
    return (
        <SpinnerContainer>
            <SpinningBox>
                <Spinner size={24} />
            </SpinningBox>
        </SpinnerContainer>
    )
}