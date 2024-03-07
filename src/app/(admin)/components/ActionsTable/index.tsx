import { Pencil, Trash } from "phosphor-react"
import { ActionButton, ActionsWrapper, BottomDecorator, HeaderItem, TableBody, TableContainer, TableHeader, TableWrapper, TopDecorator } from "./styles"

interface Header {
    width?: number;
    title: string;
}

interface ActionsTableProps {
    headers: Header[],
    rows: string[][]
}

export function ActionsTable({ headers, rows }: ActionsTableProps) {

    return (
        <TableContainer>
            <TopDecorator />
            <TableWrapper>
                <TableHeader>
                    <tr>
                        {headers.map((header) => {
                            return (
                                <HeaderItem
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
                        {rows.map((row) => {
                            return (
                                <tr>
                                    {row.map((item) => {
                                        return (
                                            <td>{item}</td>
                                        )
                                    })}
                                    <td>
                                        <ActionsWrapper>
                                            <ActionButton type="update">
                                                <Pencil size={16} />
                                            </ActionButton>
                                            <ActionButton type="delete">
                                                <Trash size={16} />
                                            </ActionButton>
                                        </ActionsWrapper>
                                    </td>
                                </tr>
                            )
                        })}
                </TableBody>
            </TableWrapper>
            <BottomDecorator />
        </TableContainer>
    )
}