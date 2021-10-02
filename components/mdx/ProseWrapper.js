import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

const ProseWrapper = styled.article`
    display: grid;
    grid-template-columns:
        1fr
        min(72ch, 100%)
        1fr;
    & > * {
        grid-column: 2;
    }
    font-size: var(--font-size-base);
    p {
        line-height: var(--leading-looser);
        margin-bottom: var(--space-32);
        font-size: calc(var(--font-size-base) * 1.05);
        @media ${breakpoints.mediaSM} {
            font-size: calc(var(--font-size-base) / 1.05);
        }
    }
    h1 {
        font-size: var(--font-size-2xl);
        margin: var(--space-80) 0 var(--space-32);
        @media ${breakpoints.mediaSM} {
            font-size: var(--font-size-xl);
            margin: var(--space-64) 0 var(--space-32);
        }
    }
    h2 {
        font-size: var(--font-size-xl);
        margin: var(--space-64) 0 var(--space-32);
        @media ${breakpoints.mediaSM} {
            margin: var(--space-48) 0 var(--space-24);
        }
    }
    h3 {
        font-size: var(--font-size-lg);
        font-weight: 300;
        margin: var(--space-32) 0 var(--space-24);
    }
    h4 {
        font-size: var(--font-size-md);
        font-weight: 400;
        margin: var(--space-24) 0 var(--space-16);
    }
`;

export default ProseWrapper;
