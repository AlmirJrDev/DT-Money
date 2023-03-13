import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary/>
            <TransactionsContainer>
                <SearchForm/>
            <TransactionsTable>
                <tbody>
                    <tr>
                        <td width='50%'>Desenvolvimento</td>
                        <td><PriceHighLight variant="income">R$12.000,00</PriceHighLight></td>
                        <td>Venda</td>
                        <td>13/03/2022</td>
                    </tr>
                    <tr>
                        <td width='50p%'>Hamburger</td>
                        <td><PriceHighLight variant="outcome">-R$32,00</PriceHighLight></td>
                        <td>Venda</td>
                        <td>13/03/2022</td>
                    </tr>
                    <tr>
                        <td width='50p%'>Cinema</td>
                        <td><PriceHighLight variant="outcome">-R$50,00</PriceHighLight></td>
                        <td>Venda</td>
                        <td>13/03/2022</td>
                    </tr>
                </tbody>
            </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}