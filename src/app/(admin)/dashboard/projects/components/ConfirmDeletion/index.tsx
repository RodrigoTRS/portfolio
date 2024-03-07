import { Modal } from "@/app/(admin)/components/Modal";
import { useProjectStore } from "@/store/projectStore";
import { Button } from "@/ui/Button";
import * as Dialog from "@radix-ui/react-dialog";
import { ActionsWrapper } from "./styles";


interface ConfirmDeletionModalProps {
    id: string
}

export function ConfirmDeletionModal({ id }: ConfirmDeletionModalProps) {

    const { deleteProject } = useProjectStore(state => {
        return {
            deleteProject: state.deleteProject
        }
    })

    return (
        <Modal
            title="Confirm deletion"
            description="Are you sure that you want do delete this project?"
        >
            <ActionsWrapper>
                <Dialog.Close asChild>
                    <Button
                        size="sm"
                        variant="secondary"
                        >
                        Cancel
                    </Button>
                </Dialog.Close>

                <Dialog.Close asChild>
                    <Button
                        size="sm"
                        variant="deletion"
                        onClick={() => deleteProject(id)}
                        >
                        Delete
                    </Button>
                </Dialog.Close>
            </ActionsWrapper>
        </Modal>
    )
}