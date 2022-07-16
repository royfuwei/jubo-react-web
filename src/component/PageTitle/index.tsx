import './PageTitle.scss';
import { ICompoenetBaseProps } from '../../domain/interface/compoenents/base';

export const PageTitleComponent = ({ name = 'Title' }: ICompoenetBaseProps) => {
    return (
        <div className="page-title">
            <p>{ name }</p>
        </div>
    );
}