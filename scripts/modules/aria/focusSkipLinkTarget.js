import getFocusableTarget from './getFocusableTarget.js';

// when the user uses a skip link
function focusSkipLinkTarget(link, event) {
    event.preventDefault();

    // focus the target
    const linkTarget = link.getAttribute('href').replace('#','');
    const target = document.getElementById(linkTarget);
    target.focus();

    // if the active element isn't the target
    if (document.activeElement != target) {
        const focusableTarget = getFocusableTarget(target);
        // force the focus on the next focusable element
        focusableTarget.focus();
    }
}

export default focusSkipLinkTarget;