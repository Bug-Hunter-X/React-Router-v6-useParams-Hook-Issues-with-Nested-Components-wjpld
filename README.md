# React Router v6 useParams Hook Issue

This repository demonstrates a common issue encountered when using the `useParams` hook in React Router v6.  The problem arises when `useParams` is used in a component that's not a direct child of a route component, resulting in undefined or stale parameter data.

## Problem

The `useParams` hook relies on the routing context provided by the parent route component. If the component using `useParams` is nested too deeply or conditionally rendered, it might not receive the necessary context updates, leading to unexpected behavior.

## Solution

The solution involves restructuring the component hierarchy to ensure that components using `useParams` are direct children of the appropriate route components.  Alternatively, using the `useLocation` hook and parsing the URL manually might be necessary in complex scenarios.  The provided solution demonstrates both approaches.