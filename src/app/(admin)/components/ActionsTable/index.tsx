import { Pencil, Trash } from "phosphor-react"
import { ActionButton, ActionsWrapper, BottomDecorator, HeaderItem, TableBody, TableContainer, TableHeader, TableWrapper, TopDecorator } from "./styles"
import * as Dialog from "@radix-ui/react-dialog";
import { ConfirmDeletionModal } from "../../dashboard/projects/components/ConfirmDeletion";
import { useState } from "react";

interface Header {
    width?: number;
    title: string;
}

interface ActionsTableProps {
    headers: Header[],
    rows: string[][],
}

export function ActionsTable({ headers, rows }: ActionsTableProps) {

    const [deletionId, setDeletionId] = useState<string>("")

    return (
        <TableContainer>
            <TopDecorator />
            <TableWrapper>
                <TableHeader>
                    <tr>
                        {headers.map((header, index) => {
                            return (
                                <HeaderItem
                                    key={index}
                                    width={header.width}
                                >{header.title}
                                </HeaderItem>
                                )
                            })}
                        <td>
                            Actions
                        </td>
                    </tr>
                </TableHeader>
                <TableBody>
                        {rows.map((row, rowIndex) => {
                            return (
                                <tr key={rowIndex}>
                                    {row.map((item, itemIndex) => {
                                        return (
                                            <td key={itemIndex}>{item}</td>
                                        )
                                    })}
                                    <td>
                                        <ActionsWrapper>
                                            <ActionButton type="update">
                                                <Pencil size={16} />
                                            </ActionButton>
                                            <Dialog.Trigger asChild>
                                                <ActionButton type="delete"
                                                    onClick={() => setDeletionId(row[0])}
                                                >
                                                    <Trash size={16} />
                                                </ActionButton>
                                            </Dialog.Trigger>
                                        </ActionsWrapper>
                                    </td>
                                </tr>
                            )
                        })}
                </TableBody>
            </TableWrapper>
            <BottomDecorator />
            <ConfirmDeletionModal
                id={deletionId}
            />
        </TableContainer>
    )
}