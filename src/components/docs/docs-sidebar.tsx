"use client";

import { useState } from "react";
import { ChevronDown, Search, FileText } from "lucide-react";
import { DocSection } from "./docs-data";

interface DocsSidebarProps {
    sections: DocSection[];
    activeSubSection: string;
    onSubSectionClick: (subSectionId: string) => void;
}

export default function DocsSidebar({
    sections,
    activeSubSection,
    onSubSectionClick,
}: DocsSidebarProps) {
    const [expandedSections, setExpandedSections] = useState<Set<string>>(
        new Set(sections.map((s) => s.id))
    );
    const [searchQuery, setSearchQuery] = useState("");

    const toggleSection = (sectionId: string) => {
        setExpandedSections((prev) => {
            const next = new Set(prev);
            if (next.has(sectionId)) {
                next.delete(sectionId);
            } else {
                next.add(sectionId);
            }
            return next;
        });
    };

    const filteredSections = searchQuery.trim()
        ? sections
            .map((section) => ({
                ...section,
                subSections: section.subSections.filter((sub) =>
                    sub.title.toLowerCase().includes(searchQuery.toLowerCase())
                ),
            }))
            .filter((section) => section.subSections.length > 0)
        : sections;

    return (
        <aside className="docs-sidebar">
            {/* Search */}
            <div className="docs-sidebar-search">
                <div className="relative">
                    <Search
                        size={14}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30"
                    />
                    <input
                        type="text"
                        placeholder="Search docs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="docs-sidebar-search-input"
                    />
                </div>
            </div>

            {/* Navigation */}
            <nav className="docs-sidebar-nav">
                {filteredSections.map((section) => {
                    const isExpanded = expandedSections.has(section.id) || searchQuery.trim() !== "";
                    const hasActiveChild = section.subSections.some(
                        (sub) => sub.id === activeSubSection
                    );

                    return (
                        <div key={section.id} className="docs-sidebar-section">
                            <button
                                className={`docs-sidebar-section-header ${hasActiveChild ? "active-parent" : ""
                                    }`}
                                onClick={() => toggleSection(section.id)}
                            >
                                <span className="docs-sidebar-section-header-text">
                                    {section.title}
                                </span>
                                <ChevronDown
                                    size={14}
                                    className={`docs-sidebar-chevron ${isExpanded ? "rotated" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`docs-sidebar-subitems ${isExpanded ? "expanded" : ""
                                    }`}
                            >
                                {section.subSections.map((sub) => (
                                    <button
                                        key={sub.id}
                                        className={`docs-sidebar-subitem ${activeSubSection === sub.id ? "active" : ""
                                            }`}
                                        onClick={() => onSubSectionClick(sub.id)}
                                    >
                                        <FileText size={14} className="opacity-40 shrink-0" />
                                        {sub.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </nav>
        </aside>
    );
}
