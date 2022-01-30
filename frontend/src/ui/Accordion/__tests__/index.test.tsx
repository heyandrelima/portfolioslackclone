import { render } from '@testing-library/react';
import Accordion, {AccordionOption} from '../index';

describe('ui/Accordion', () => {
    it('should show the correct labels', () => {
        const component = render(<Accordion>
            <AccordionOption title='first option'><p>Here is some text</p></AccordionOption>
        </Accordion>);
        const firstOption = component.getAllByTestId('option-label')[0].textContent;
        expect(firstOption).toBe('first option');
    });
    it('should open on click when closed', () => {
        const component = render(<Accordion>unread messages</Accordion>);
        const firstOption = component.getAllByTestId('option-label')[0];
        firstOption.click();
        expect(firstOption).toHaveClass('open');
    });
});
