// get the next closest focusable element
function getFocusableTarget(target) {
    const children = Array.from(target.children);
    let childTarget = [];

    children.forEach(child => {
        if (child.tagName === 'A' || child.hasAttribute('tabindex')) {
            childTarget.push(child);
        }
    });

    return childTarget[0];
}

export default getFocusableTarget;