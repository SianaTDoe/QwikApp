import {component$, useClientEffect$} from '@builder.io/qwik';
import {controller, presenter} from '../injection';

export default component$(() => {

    useClientEffect$(() => {
        controller.searchByQuery();
    });

    return (
        <div>
            Afficher le contenu du view model à partir du presenter -
            {presenter.vm}
        </div>
    );
});
